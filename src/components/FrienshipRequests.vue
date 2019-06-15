<template>
  <div>
    <q-btn round flat  icon="people" class="q-ml-md" @click="showDialog = true">
      <q-badge color="secondary" floating>{{ openRequests }} </q-badge>
    </q-btn>
    <q-dialog v-model="showDialog" @hide="showDialog = false" :content-style="{ minWidth: '90vw' }">
      <q-card class="adjusted-width">
        <q-card-section>
          <div class="text-h6">Your friendship requests</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 50vh" class="scroll">
          <q-list>
            <q-item v-for="n in 15" :key="n">
              <q-item-section avatar>
                <q-icon name="signal_wifi_off" />
              </q-item-section>
              <q-item-section>Wanna be friends?</q-item-section>
              <q-item-section side>
                <div class="q-gutter-xs">
                  <q-btn size="12px" flat dense round icon="done" color="positive"/>
                  <q-btn size="12px" flat dense round icon="clear" color="negative" />
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn flat label="Decline" color="primary" v-close-popup />
          <q-btn flat label="Accept" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'FriendshipRequests',
  data () {
    return { showDialog: true }
  },
  computed: {
    ...mapGetters({
      openRequests: 'friendshipRequests/openRequests'
    }),
    ...mapState({
      friendshipRequests: state => state.friendshipRequests.friendshipRequests
    })
  },
  created () {
    this.$store.dispatch('friendshipRequests/fetchFriendshipRequests')
  }
}
</script>

<style scoped>
.adjusted-width {
  /* min-width: 90vw; */
}
</style>
